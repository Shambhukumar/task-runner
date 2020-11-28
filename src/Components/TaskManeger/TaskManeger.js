import React from 'react';
import MaterialTable from 'material-table';

const  TaskManager =  () =>{
  const [state, setState] = React.useState({
    columns: [
      { title: 'User Name', field: 'username' },
      { title: 'Task Name', field: 'taskname' },
      { title: 'Due Date', field: 'date', type: 'date' },
      {
        title: 'Status',
        field: 'status',
        lookup: { 1: 'Pending', 2: 'Completed'},
        
        
      },
    ],
    data: [
      {username: "Shambhu", taskname: "Complete the Ui", date: "11/29/2020", status: 2 }
    ],
  });

  const setData = (newData)=>{
    if(!newData.status){
      newData.status="1"
      console.log("you are here")
     
    }
       setState((prevState)=>{
        const data = [...prevState.data]
        data.push(newData)
        return {...prevState, data}
      })
    
    // state.data.forEach((e,el)=>{
    //   if(e.Phone === newData.Phone){
    //     return
    //   }
    //   if(el === state.data.length-1){
    //     setState((prevState)=>{
    //       const data = [...prevState.data]
    //       data.push(newData)
    //       return {...prevState, data}
    //     })
    //   }
    // })
  }

  return (
    <div id="task" style={{paddingTop: "10%"}}>
    <MaterialTable
    style={{minHeight: "80vh",marginBottom: "60px"}}
      title="Task Maneger"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setData(newData)
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
export default TaskManager;