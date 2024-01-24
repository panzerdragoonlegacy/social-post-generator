import URLInput from "./components/URLInput";
import TextArea from "./components/TextArea";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <div className="antialiased text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div className="py-1">
          <h1 className="text-4xl font-bold">Social Post Generator</h1>
        </div>

        <div className="py-1">
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <form>
                <URLInput name="picture-url" label="Picture URL" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
