import express from 'express';
import connectToDB from './Database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import { TaskModel } from './Database/db.js';


const app = express();
const Port = 8000;

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connectToDB();

app.post('/addTodo', async (req, res) => {
    try {
        const newTask = await TaskModel.create({
            task: req.body.task,
            createdAt: Date.now(),
        });
        newTask.save();
        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
});

app.get('/getTodos', async (req, res) => {
    try {
        const tasks = await TaskModel.find({}).sort({ createdAt: -1 });//-1 means sort in descending order i.e lastest task will be on top
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/toggleTodo/:id', async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);
        task.done = !task.done;
        task.save();
        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/updateTodo/:id', async (req, res) => {
    try {
        await TaskModel.findOneAndUpdate({ _id: req.params.id }, { task: req.body.data });
        const task = await TaskModel.findById(req.params.id);
        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/deleteTodo/:id', async (req, res) => {
    try {
         await TaskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(Port, () => {
    console.log(`Server is runnin on port ${Port}`);
});