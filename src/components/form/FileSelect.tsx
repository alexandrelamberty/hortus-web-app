import { useEffect, useState } from "react";

import { Button, Form, Header, Icon, Image, Message } from "semantic-ui-react";

interface FileSelectProps {
  value: string | undefined;
  onChange: (e: any) => void;
  error?: any;
}

/**
 *
 * @param param0
 * @returns
 */
export const FileSelect = ({ value, onChange, error }: FileSelectProps) => {
  // Store the image preview url
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    console.log("ImageUploadValueChange");
    if (value) {
      // FIXME:
      let url = "http://localhost:3333/static/" + value;
      setPreview(url);
    }
  }, [value]);

  return (
    <Message color={error ? "red" : "grey"}>
      {preview ? (
        <Image
          src={preview}
          alt={preview}
          size="medium"
          as="label"
          htmlFor="image"
          type="button"
          style={{ width: "450px", height: "auto" }}
        />
      ) : (
        <>
          <Header icon>
            <Icon name="image" />
            <Header.Content>
              Add a picture
              <Header.Subheader>
                Choose a picture from your computer.
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Button as="label" htmlFor="image" type="button" primary>
            Choose a File
          </Button>
        </>
      )}
      <Form.Field>
        <input
          id="image"
          type="file"
          hidden
          onChange={(e: any) => {
            if (e.target.files || e.target.files.length > 0) {
              const objectUrl = URL.createObjectURL(e.target.files[0]);
              setPreview(objectUrl);
              onChange(e);
            }
          }}
        />
      </Form.Field>
    </Message>
  );
};
