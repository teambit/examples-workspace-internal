import React from 'react';
import { useGetJokes } from './use-get-jokes'
import { List } from '@teambit/documenter.ui.list'

export const abstract = 'A hook that fetches jokes'

export default function Overview() {
    return <div>hi there</div>;
}

export const labels = ['hook', 'typescript', 'react', 'fetch']

export const examples = [
    {
      scope: {
        useGetJokes,
        List
      },
      title: "Using useGetJokes",
      description: (
            <>  
                <p>This hook retrieves jokes from a jokes API. It returns the following variables:</p>
                <List element="ol" spacing="lg" >
                    {
                        [
                        `"getJokes": The data-fetching function`,
                        `"joke": The retrieved data`,
                        `"isLoading": The state of the data-fetching function`,
                        `"error": An error message (or an empty string)`
                        ]
                    }
                </List>
            </>
          ),
      code: `() => {
        const [getJoke, joke, isLoading, error] = useGetJokes();
    
        return (
            <div>
                <div>
                    {error || joke.map((line, key) => <p key={key}>{line}</p>)}
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
