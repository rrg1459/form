import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.scss';

const App = () => {

  const { reset, handleSubmit, control, formState } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => setFormData(data);
  const resetForm = () => setFormData({});

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <div className="App">
      <h2>Submitted Data:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields">
          <div className="fields__controller">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input {...field} placeholder="First Name" />}
            />
          </div>
          <div className="fields__controller">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input {...field} placeholder="Last Name" />}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="buttons--form" type="submit">
            Submit
          </button>
          <button className="buttons--form" type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>

    </div>
  );
}

export default App;
