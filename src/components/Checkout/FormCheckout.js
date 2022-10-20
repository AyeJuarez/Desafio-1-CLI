import { Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../../Context/CartContext'
import orderService from '../../services/orders'
import Spinner from '../Spinner'

const FormCheckout = ({ children }) => {
    const { cart, calculateTotals, clear } = useCartContext()
    const [orderId, setorderId] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <h1>Checkout</h1>
            <Formik
                initialValues={{ email: '', phone: '', name: '' }}
                validate={(values) => {
                    const errors = {}
                    if (!values.name) {
                        errors.name = 'Requerido'
                    }
                    if (!values.email) {
                        errors.email = 'Requerido'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setLoading(true)
                    const newOrder = {
                        buyer: { ...values },
                        items: cart.map((item) => ({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            quantity: item.quantity,
                        })),
                        date: new Date(),
                        total: calculateTotals(),
                    }

                    orderService.insert(newOrder).then((response) => {
                        setTimeout(() => {
                            setorderId(null)
                            clear()
                            navigate('/')
                        }, 10000)
                        setLoading(false)
                        setorderId(response)
                    })

                    setSubmitting(false)

                    resetForm()
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <input
                                type='text'
                                name='name'
                                placeholder='Nombre completo'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <input
                                type='email'
                                name='email'
                                placeholder='example@example.com'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}

                            {loading ? (
                                <Spinner />
                            ) : (
                                orderId && (
                                    <>
                                        <p>Gracias por su compra!</p>
                                        <p>
                                            Su id de compra es: <span className='order-id'>{orderId}</span>
                                        </p>
                                    </>
                                )
                            )}
                            <button type='submit' disabled={isSubmitting}>
                                {children}
                            </button>
                        </FormGroup>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormCheckout

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    font-size: 1.1rem;
    border-radius: 8px;
    border: 1px solid rgba(51, 51, 51, 0.5);
    padding: 0.5rem 1rem;
  }
  button {
    border: none;
  }
`