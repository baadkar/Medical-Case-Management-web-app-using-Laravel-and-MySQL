# Database design

## Tables
- `users`: Laravel user account (`id`, `name`, `email`, `password`, `role`, timestamps).
- `cases`: `id`, unique `case_number`, `patient_reference`, `surgeon_name`, `implant_type`, `status`, `priority`, nullable `surgery_date`, `created_by`, timestamps.

`cases.created_by` is a foreign key to `users.id`. A user can create many cases. Case number has a unique index; status has an index for filtering.

```text
users (1) -------- (many) cases
users.id             cases.created_by
```

All seeded case and patient-reference values are fictional.
