import React from 'react';
import MaterialTable from 'material-table';

const  AddressBook =  () =>{
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name', defaultSort: "asc" },
      { title: 'Mobile Number', field: 'Phone', type: 'numeric', sorting: false, },
    ],
    data: [
      { name: 'Shambhu kumar', Phone: '8855669985' },
      {
        name: 'Rajiv Bansal',
        Phone: '9828558898',
        
      },
      {
        name: "tanvi Khanna",
        Phone:  "9966332202"
      },
      {
        name: "Amit tiwari",
        Phone:  "9988558897"
      }
    ],
  });

  const checkPhone = (newData)=>{
    if(state.data.length < 1){
      console.log("you are here")
      setState((prevState)=>{
        const data = [...prevState.data]
        data.push(newData)
        return {...prevState, data}
      })
    } 
    state.data.forEach((e,el)=>{
      if(e.Phone === newData.Phone){
        return
      }
      if(el === state.data.length-1){
        setState((prevState)=>{
          const data = [...prevState.data]
          data.push(newData)
          return {...prevState, data}
        })
      }
    })
  }

  return (
    <div id="address">
    <MaterialTable
      
      title="Address Book"
      style={{minHeight: "90vh",marginBottom: "20px",  }}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              checkPhone(newData)
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
  );
}
export default AddressBook;