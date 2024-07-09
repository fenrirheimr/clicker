import { listTaskItems } from "../../../constants";
import ListTaskItem from "./ListTaskItem";

const ListTasks = ({click}) => {

    return (
        <div className="w-full mt-4">
            <h2 className="font-semibold mb-3 text-white text-2xl text-left">List of tasks</h2>
            {listTaskItems.map((task) => (
                <ListTaskItem  click={click}  key={task.id} data={task}/>
            ))}
        </div>
    );
};

export default ListTasks;
