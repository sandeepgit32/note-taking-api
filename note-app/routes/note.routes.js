const express = require("express");
const NoteController = require("../controllers/note.controller");

var router = express.Router();

/**
 * @swagger
 * /notes:
 *  get:
 *    summary: Retrieve all notes
 *    responses:
 *      '200':
 *          description: A successful response
 *      '500':
 *          description: Internal server error
 */
router.get('/', NoteController.findAll);


/**
 * @swagger
 * /notes/{noteId}:
 *  get:
 *      summary: Retrieve a single note with noteId
 *      parameters:
 *        - name: noteId
 *          in: path
 *          required: true
 *          description: Enter the noteId
 *      responses:
 *          '200':
 *              description: A successful response
 *          '404':
 *              description: Note is not found with specified noteID
 *          '500':
 *              description: The specified noteId is invalid or Internal server error
 */
router.get('/:noteId', NoteController.findOne);


/**
 * @swagger
 * /notes:
 *  post:
 *      summary: Create a single note
 *      parameters:
 *        - in: body
 *          name: note
 *          required: true
 *          schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  content:
 *                      type: string
 *              required:
 *                - content
 *      responses:
 *          '201':
 *              description: Created a new note
 *          '400':
 *              description: Note content can't be empty
 *          '500':
 *              description: Internal server error
 */
router.post('/', NoteController.create);


/**
 * @swagger
 * /notes/{noteId}:
 *  put:
 *      summary: Update a note with noteId
 *      parameters:
 *        - name: noteId
 *          in: path
 *          required: true
 *          description: Enter the noteId
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Note content can't be empty
 *          '404':
 *              description: Note is not found with specified noteID
 *          '500':
 *              description: The specified noteId is invalid or Internal server error
 */
router.put('/:noteId', NoteController.update);


/**
 * @swagger
 * /notes/{noteId}:
 *  delete:
 *      summary: Delete a note with noteId
 *      parameters:
 *        - name: noteId
 *          in: path
 *          required: true
 *          description: Enter the noteId
 *      responses:
 *          '200':
 *              description: A successful response
 *          '404':
 *              description: Note is not found with specified noteID
 *          '500':
 *              description: The specified noteId is invalid or Internal server error
 */
router.delete('/:noteId', NoteController.delete);

module.exports = router