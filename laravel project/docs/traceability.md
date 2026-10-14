# Requirements traceability

| ID | Requirement (input) | Implementation (output) | Verification |
|---|---|---|---|
| REQ-001 | Admin shall be able to create a case | `CaseController@store`, `StoreMedicalCaseRequest`, create form | `test_admin_can_create_a_case` |
| REQ-002 | Case Number shall be unique | Unique DB index and Form Request unique rule | `test_duplicate_case_number_fails_validation` |
| REQ-003 | Only Admin shall delete cases | `MedicalCasePolicy@delete` and controller authorization | `test_viewer_cannot_delete_a_case` |
| REQ-004 | Guests shall not access case pages or APIs | `auth` and `auth:sanctum` middleware | `test_guest_cannot_open_case_pages_or_api` |
| REQ-005 | Invalid credentials shall be rejected | `AuthController@login` | `test_invalid_login_is_rejected` |
