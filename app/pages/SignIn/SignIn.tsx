'use client';
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './SignIn.module.css';
import SignInImage from '../../Images/SignIn_Image.png';
import LogoImage from '../../Images/Logo_Image.png';
import { FormInput, FormCheckBox } from '../../components/Basic/FormInput';
import Button from '../../components/Basic/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { notification, Spin } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { getBankBranchesData } from '../../store/slices/testSlices';

interface SignInForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface MultiViewTableProps {
  Test_Red: RootState["Test_Red"];
  GetBankBranchesData: () => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format. Add `@`.').required('Email is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean(),
});

const SignIn: React.FC<MultiViewTableProps> = () => {
  const [message, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = React.useState(false);
  const [isClient, setIsClient] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { data: Test_Red, loading, error } = useSelector((state: RootState) => state.Test_Red);
    
  console.log(Test_Red)
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(getBankBranchesData());
  }, [dispatch]);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<SignInForm> = () => {
    setSpinning(true)
    setTimeout(() => {
      setSpinning(false)
      message.open({
        message: 'Login Successful',
        description: 'You have successfully logged in.',
        type: 'success',
        duration: 0,
      })
    }, 2000);
    setTimeout(() => {
      route.push('pages/Home');
    }, 3000);
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning} fullscreen />
      <div className='container-fluid'>
        <div className='row d-flex flex-row'>
          <div className={`col-lg-6 col-md-6 col-sm-6 ${style.SignInContainer}`}>
            {isClient && (
              <Image src={LogoImage} alt='Company Logo' className={style.Logo} width={200} height={50} />
            )}
            <h4>Sign In</h4>
            <p>Sign in to stay connected.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                placeholder='Enter Your Email'
                Label='Email'
                classInput={style.Input}
                className={style.inputContainer}
                labelClass={style.Label}
                classError={style.Error}
                name='email'
                type="email"
                errors={errors}
                control={control}
              />
              <FormInput
                placeholder='Enter Your Password'
                Label='password'
                classInput={style.Input}
                className={style.inputContainer}
                labelClass={style.Label}
                classError={style.Error}
                name='password'
                type="password"
                errors={errors}
                control={control}
              />
              <div className={style.rememberContainer}>
                <FormCheckBox
                  name='rememberMe'
                  labelText='Remember me?'
                  ErrorClass={`${style.ErrorClass}`}
                  isShowError={false}
                  CheckboxClass={`${style.remember}`}
                  errors={errors}
                  control={control}

                />
                <Link href="/">Forgot Password?</Link>
              </div>
              <Button Text='Sign In' buttonClass={style.buttonSignIn} Disable={spinning || loading} />
            </form>
            {error && <p className={style.errorMessage}>Error: {error}</p>}
          </div>
          <div className={`col-lg-6 col-md-6 col-sm-6 ${style.imageContainer}`}>
            {isClient && (
              <Image src={SignInImage} alt='Sign In Illustration' className={style.SignInImage} width={500} height={100} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};



export default SignIn;
