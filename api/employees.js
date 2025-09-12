import {
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployee,
  deleteEmployee
} from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
router
  .route("/")
  .get(async (req, res) => {
    try {
      const response = await getEmployees();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { employee_name, birthday, salary } = req.body;
      console.log (employee_name, birthday, salary)
      const response = await createEmployee({
        employee_name,
        birthday,
        salary,
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  });
router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const response = await getEmployee(+id);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { employee_name, birthday, salary } = req.body;
      const response = await updateEmployee({
        id: +id,
        employee_name,
        birthday,
        salary,
      })
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const response = await deleteEmployee(+id)
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  });
