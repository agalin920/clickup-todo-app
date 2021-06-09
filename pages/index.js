import axios from 'axios';
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react';
import styles from '../styles/Home.module.css'

const clientId = 'AQV6BUJES9F2HXYWSITGRI8FMYCPXX44';
const clientSecret = 'CSHQQOO1Q9U17W2BVETWDRCB6Z3FXZAOKBV4X86A889TYLHPMI3AM1OX3YOU9C7C';

export default function Home() {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState('');
  const router = useRouter();

  useEffect(async () => {
    // if(!router.isReady) return;
    // const {code} = router.query;
    // console.log(router.query);
    // if(!code) {
    //   window.open(`https://app.clickup.com/api?client_id=${clientId}&redirect_uri=https://clickup-todo-app.vercel.app`, "_self");
    // } else {
    //   const token = axios.post(`https://app.clickup.com/api/v2/oauth/token/?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`);
    //   console.log('test token', token);
    //   // const data = await axios.get('https://api.clickuppp.com/api/v2/folder/38093451/list?archived=false', {
    //   //   headers: {
    //   //     Authorization: 'pk_14719907_QWTOCXX58D8GS9PNE4QAYZ4LIRKWQPE9'
    //   //   }
    //   // })
    // }

    const {data} = await axios.get('http://localhost:5000');
    console.log('test lists', data.lists);
    setLists(data.lists);
  }, []);

  useEffect(async () => {
    if(lists.length) {
      const {data} = await axios.get(`http://localhost:5000/tasks/${lists[0].id}`);
      console.log('test tasks', data);
      setTasks(data.tasks)
    }
  }, [lists.length])

  async function handleTaskSave() {
    await axios.post(`http://localhost:5000/tasks/${lists[0].id}`, { name: taskInput });
    const {data} = await axios.get(`http://localhost:5000/tasks/${lists[0].id}`);
    setTasks(data.tasks)
    setTaskInput('');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ClickUp TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {lists.map((list) => {
          return (
            <>
            <h3>{list.name}</h3>
            <ul>
              {tasks.map((task) => {
                return <li>{task.name}</li>
              })}
            </ul>
            </>
          )
        })}
        <input placeholder='Enter new task...' onChange={(e) => setTaskInput(e.target.value)}></input>
        <button onClick={handleTaskSave}>Save</button>
      </div>
    </div>
  )
}
