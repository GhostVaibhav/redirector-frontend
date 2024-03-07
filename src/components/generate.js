import React from 'react'

function Generate(props) {
  function check(str) {
    if(str.length === 0) return false;
    return true;
  }
  async function submit(e) {
    e.preventDefault();
    if(document.getElementById('input').classList.contains('border-red-500')) document.getElementById('input').classList.remove('border-red-500');
    const input = document.getElementById('input').value
    if (check(input)) {
      console.log(input)
    }
    else {
      const inputElt = document.getElementById('input');
      inputElt.classList.add('border-red-500');
      return;
    }
    
    const data = {
      to: input
    };
    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
    props.setLoading(true)
    await fetch(process.env.REACT_APP_API_URL, requestOptions)
      .then(response => response.json())
      .then(data => {
        props.setUrl("https://to.ghostvaibhav.codes/" + data.from);
        props.setLoading(false);
      })
      .catch(error => {
        props.setLoading(false);
      })

    props.setLoading(false)
  }
  return (
    <form className='w-[90%] sm:w-max bg-slate-700 flex flex-col sm:flex-row gap-4 m-4 p-4 rounded-xl border border-[#64748b]' onSubmit={(e) => submit(e)}>
      <input className='rounded-xl p-2 px-4 w-full sm:min-w-96 bg-slate-500 text-white outline-none border border-[#475569]' type="text" id="input" placeholder='Your URL here' autoFocus={true} autoComplete="off" />
      <button className='rounded-xl border w-full bg-slate-300 hover:bg-slate-400 p-2'>Generate</button>
    </form>
  )
}

export default Generate;
