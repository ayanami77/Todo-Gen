import { component$ } from "@builder.io/qwik";

interface TodoCardProps {
  text?: Promise<string> | string
}
export default component$<TodoCardProps>((props) => {
  const { text } = props;
  return (
    <div class="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
      <div class="flex justify-center gap-10">
        {text !== "Let's find what to do next!" && (<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Add
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>)}
      </div>
    </div>
  )
})