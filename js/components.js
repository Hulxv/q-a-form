const AnswerInput = (i) => `
    <input
        type="text"
        class="w-full pr-16 input input-primary input-bordered"
        placeholder="Choice ${i || ""}"
    />
`;

const ErrorMessage = (msg) => `
   <div class="alert alert-error ">
  <div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">    
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
    </svg> 
    <label>${msg}</label>
  </div>
</div>
`;
const MultipleAnswers = () => `
	<div class="form-control answers flex">
        <input
            type="text"
            class="w-full pr-16 input input-primary input-bordered"
            placeholder="Choice 1"
        />
        <input
            type="text"
            class="w-full pr-16 input input-primary input-bordered"
            placeholder="Choice 2"
        />
    </div>
    <button
        class="
            btn-add-answer
            flex
            items-center
            my-3
            btn btn-sm
            text-black
            btn-outline
        "
        type="button"
    >
        <span> New Choice </span> <span class="text-2xl ml-1">+</span>
    </button>
`;

const OnceAnswer = () => `
      
        <textarea class="textarea h-24 w-72 mb-2" placeholder="Answer"></textarea>
`;

export { AnswerInput, ErrorMessage, MultipleAnswers, OnceAnswer };
