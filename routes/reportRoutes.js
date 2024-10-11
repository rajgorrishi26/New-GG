const express = require('express');
const { issueReport, cancelIssuedReport, acceptReport, cancelAcceptReport, completeIssue, getIssuedReports ,fetchAcceptedReports,
    fetchCompletedIssues } = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');
const router = express.Router();

router.post('/issue', authMiddleware, upload.array('images', 5), issueReport);
router.delete('/cancelIssuedReport/:id', authMiddleware, cancelIssuedReport); // New route to cancel issued report
router.post('/acceptReport/:id', authMiddleware, acceptReport); // New route to accept report
router.delete('/cancelAcceptReport/:id', authMiddleware, cancelAcceptReport); // New route to cancel accepted report
router.post('/completeIssue/:id', authMiddleware, completeIssue); // New route to mark report as completed
router.get('/issued', getIssuedReports);
router.get('/fetchAcceptedReports', authMiddleware, fetchAcceptedReports);
router.get('/fetchCompletedIssues', authMiddleware, fetchCompletedIssues);

module.exports = router;
