const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    
    // get data-sizing attribute
    const suffix = this.dataset.sizing || '';

    // update the :root styles
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
