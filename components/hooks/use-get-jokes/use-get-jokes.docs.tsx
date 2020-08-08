import React from 'react'
import {useGetJokes} from './use-get-jokes'

export const abstract = 'A hook that fetches jokes'

export const labels = ['hook', 'typescript', 'react','fetch']

// () => {

//     const [getJoke, joke, isLoading, error] = useGetJokes();

//     return (
//         <div>
//             <div>
//                 {error || joke.map(line => <p>{line}</p>)}
//             </div>
//             <div>
//                 <button disabled={isLoading} onClick={getJoke}>
//                     {isLoading ? 'loading...' : "fetch a joke"}
//                 </button>
//             </div>
//         </div>
//     )
// }


export const examples = [
    {
      scope: {
        useGetJokes
      },
      title: "Using useGetJokes",
      description: "This hook uses a jokes api. It returns the data-fetching function (getJoke), the data (joke), the state of the 'getJoke' function and an error message (or an empty string)." ,
      code: `() => {

        const [getJoke, joke, isLoading, error] = useGetJokes();
    
        return (
            <div>
                <div>
                    {error || joke.map(line => <p>{line}</p>)}
                </div>
                <div>
                    <button disabled={isLoading} onClick={getJoke}>
                        {isLoading ? 'loading...' : "fetch a joke"}
                    </button>
                </div>
            </div>
        )
    }`
      }
  ];