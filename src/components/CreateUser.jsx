import { useForm } from 'react-hook-form';
import TextField from '../uiKit/TextField';
import SelectField from '../uiKit/SelectField';

const CreateUser = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={'نام‌ونام‌خانوادگی'}
        name="name"
        register={register}
        required
        validationSchema={{
          required: 'نام‌و‌نام‌خانوادگی ضروری است',
          minLength: {
            value: 1,
            message: 'حداقل 1 کاراکتر را وارد کنید',
          },
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'نام کاربری'}
        name="username"
        register={register}
        required
        validationSchema={{
          required: 'نام کاربری ضروری است',
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'ایمیل'}
        name="email"
        register={register}
        required
        validationSchema={{
          required: 'ایمیل  ضروری است',
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'شماره تماس'}
        name="phone"
        register={register}
        required
        validationSchema={{
          required: 'شماره تماس  ضروری است',
        }}
        type="number"
        errors={errors}
      />
      <SelectField
        label="آدرس"
        required
        name="address"
        register={register}
        options={[
          { label: 'شیراز', value: 'شیراز' },
          { label: 'تهران', value: 'تهران' },
          { label: 'تبریز', value: 'تبریز' },
          { label: 'اصفهان', value: 'اصفهان' },
        ]}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
};
export default CreateUser;
