import React from "react";
import styles from "./bad-jokes-viewer.module.scss";
import { Button } from "@teambit/bad-jokes.react.ui.button";
import { useGetJokes } from "@teambit/bad-jokes.react.hooks.use-get-jokes";
import { capitalize } from "@teambit/toolbox.toolbox.capitalize";

/** Retrieves and displays bad jokes */
export const BadJokesViewer = () => {
  const [getJoke, joke, isLoading, error] = useGetJokes();

  return (
    <div className={styles.badJokesViewer}>
      <div className={styles.contentWrapper}>
        {error || joke.map((line, key) => <p key={key}>{line}</p>)}
      </div>
      <div>
        <Button disabled={isLoading} onClick={getJoke}>
          {isLoading ? "loading..." : capitalize("another one, please")}
        </Button>
      </div>
    </div>
  );
};
