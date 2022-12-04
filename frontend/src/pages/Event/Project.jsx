import {useDropzone} from 'react-dropzone';

const EventProject = () => {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  return (

  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-left">
    <div className="mx-auto max-w-xl">
      <h1 className="text-center text-4xl text-medium text-gray-900">
      Project submission
      </h1>

      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Fill in the fields below to get started
      </p>

      <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 border border-1 border-black shadow-xl">
        <div>
          <label for="email" className="text-sm font-medium">Project Name</label>

          <div className="relative mt-1">
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div>
          <label for="description" className="text-sm font-medium">Description</label>

          <div className="relative mt-1">
            <textarea
              id="description"
              rows="5"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="thumbnail" className="text-sm font-medium">Thumbnail</label>

          <div className="relative mt-1">
            <input
              type="file"
              id="thumbnail"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div>
          <label for="git" className="text-sm font-medium">Github repository or a link to the source code (must be public)</label>

          <div className="relative mt-1">
            <input
              type="text"
              id="git"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div>
          <label for="demo" className="text-sm font-medium">Live Demo URL</label>
          <p className="text-sm text-gray-500">If you have a demonstration, link to it here!</p>
          <div className="relative mt-1">
            <input
              type="text"
              id="demo"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div>
          <label for="demo" className="text-sm font-medium">Video Demo</label>
          <p className="text-sm text-gray-500">Record a short 2 to 5 minutes video</p>
          <div className="relative mt-1">
            <input
              type="text"
              id="demo"
              className="w-full rounded-lg border border-gray-300 p-4 pr-12 text-md"
            />
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 pt-6">
          <button
            class="rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white"
          >
            Save
          </button>

          <button
            class="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
        
      </form>
    </div>
  </div>

  )
}

export default EventProject