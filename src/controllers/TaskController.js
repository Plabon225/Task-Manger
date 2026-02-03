import TaskModel from "../models/TaskModel.js";


export const createTask = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ status: "fail", message: "Unauthorized" });

        const task = await TaskModel.create({ ...req.body, email: req.user });

        res.status(201).json({ status: "success", data: task });
    } catch (err) {
        res.status(400).json({ status: "failed", error: err.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const result = await TaskModel.deleteOne({ _id: req.params.id });

        if (!result.deletedCount)
            return res.status(404).json({ status: "fail" });

        res.json({ status: "success" });

    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await TaskModel.updateOne(
            { _id: req.params.id, email: req.user },
            { $set: { status: req.params.status } }
        );
        if (!result.matchedCount)
            return res.status(404).json({ status: "fail" });
        res.json({ status: "success" });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

export const listTaskByStatus = async (req, res) => {
    try {
        const data = await TaskModel.aggregate([
            { $match: { status: req.params.status, email: req.user } },
            {
                $project: {
                    title: 1,
                    description: 1,
                    status: 1,
                    createdDate: {
                        $dateToString: { date: "$createdDate", format: "%d/%m/%Y" }
                    }
                }
            }
        ]);

        res.json({ status: "success", data });
    } catch {
        res.status(400).json({ status: "fail" });
    }
};

export const taskStatusCount = async (req, res) => {
    try {
        const data = await TaskModel.aggregate([
            {$match: {email: req.user}},
            {$group: {_id: "$status", count: {$sum: 1}}}
        ]);

        res.json({status: "success", data});
    } catch {
        res.status(400).json({status: "fail"});
    }
};



