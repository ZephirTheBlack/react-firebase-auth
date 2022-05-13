import React, { useState } from 'react'
import { auth } from '../fconfig'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const historial = useNavigate()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const RegistrarUsuario = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => historial('/'))
            .catch(e => {
                if (e.code == 'auth/invalid-email') {
                    setMsgError('Formato de email incorrecto')
                }
                if (e.code == 'auth/weak-email') {
                    setMsgError('Formato de email incorrecto')
                }
            })
    }

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => historial('/')).catch((err) => {
                if (err.code == 'auth/wrong-password') {
                    setMsgError('Password incorrecta')
                }
            })
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form className='form-group' onSubmit={RegistrarUsuario}>
                    <input type="email" className='form-control' placeholder='Introduce el Email' onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" className='form-control mt-4' placeholder='Introduce el Password' onChange={(e) => { setPass(e.target.value) }} />
                    <input type="submit" value="Registrar Usuario" className='btn btn-dark btn-block mt-4' />
                </form>
                <button className='btn btn-success btn-block' onClick={LoginUsuario}>Iniciar Sesion</button>
                {
                    msgerror ? (
                        <div className='error-message'>
                            {msgerror}
                        </div>
                    ) : (
                        <span></span>
                    )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login