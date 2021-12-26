import React from 'react'
import { getToDos as getToDosApi} from './todo.api'
import { useDispatch , useSelector } from 'react-redux'
import { toDosActions } from './todo.reducer';

export default function TodoTable() {
    const toDos = useSelector(state => state.toDos.toDos);
    const dispatch = useDispatch();

    function handleClick(event) {
        const getToDosRequest = getToDosApi();
        getToDosRequest.then( response => {
            dispatch(toDosActions.getToDosSuccess(response.data));
        })
    }

    return (
        <div>
            <button onClick={handleClick}>
                Get Data
            </button>
            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                </tr>
                { toDos.map(toDo => {
                    return <tr>
                                <td>{toDo.id}</td>
                                <td>{toDo.userId}</td>
                                <td>{toDo.title}</td>
                            </tr>
                })
                }
            </table>
        </div>
    )
}
