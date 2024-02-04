import { useState } from "react";
import URLInput from "./URLInput";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";
import { useQuery } from "@tanstack/react-query";

const rootURL = "https://panzerdragoonlegacy.com";
const apiPrefix = "api/v1";
const picturesPrefix = "pictures";

export default function Form() {
  const [pictureID, setPictureID] = useState<string | undefined>(undefined);

  const { isPending, error, data } = useQuery({
    queryKey: ["picture", pictureID],
    queryFn: () =>
      fetch(`${rootURL}/${apiPrefix}/${picturesPrefix}/${pictureID}`).then(
        (res) => res.json()
      ),
  });

  console.log({ data });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  return (
    <form>
      <URLInput
        name="picture-url"
        label="Picture URL"
        onChange={(value) => {
          const pictureURLPrefix = `${rootURL}/${picturesPrefix}/`;
          if (value.startsWith(pictureURLPrefix)) {
            const suffix = value.split(pictureURLPrefix).pop();
            console.log({ suffix });
            setPictureID(suffix);
          }
        }}
      />
      <TextArea name="base-post" label="Base Post" />
      <TextArea name="hashtags" label="Hashtags" rows={2} />
      <SubmitButton />
      <TextArea name="alt-text" label="Alt Text" />
      <TextArea name="bluesky" label="Bluesky" />
      <TextArea name="mastodon" label="Mastodon" />
      <TextArea name="x" label="X (Twitter)" />
      <TextArea name="facebook" label="Facebook" />
      <TextArea name="instagram" label="Instagram" />
    </form>
  );
}
