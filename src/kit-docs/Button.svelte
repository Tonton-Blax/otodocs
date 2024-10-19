<script>
    export let type="success"
</script>

<button 
    type="button" 
    class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    class:bg-green-500={type === "success"}
    class:bg-blue-700={type === "normal"}
    class:bg-red-500={type === "danger"}
>
    <slot></slot>
</button>
