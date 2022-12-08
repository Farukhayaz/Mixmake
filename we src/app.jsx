
import React from 'react'

export default function App() {
    return (
        <div>
            <form />
        </div>
    )
}


// import React from 'react';
// import { useForm } from 'react-hook-form';

// function App() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();
//     const onSubmit = (data) => console.log(data);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register('firstName', { required: true })} />
//             {errors.firstName && <p>first name is required.</p>}
//             <input {...register('lastName', { required: true })} />
//             {errors.lastName && <p>Last name is required.</p>}
//             <input {...register('age', { required: true }, { pattern: /\d+/ })} />
//             {errors.age && <p>Please enter number for age.</p>}
//             <input type="submit" />
//         </form>
//     );
// }
// export default App