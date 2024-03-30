# Description

This is a framer motion mini-project.
The implementation takes into account a straightforward but not-so-simple array updating logic.

## Acceptance Criteria

- Clicking the "Down" button should mark a single widget as processed. It should select the final unprocessed widget in the inbox.
- Clicking the "Up" button should mark the very first processed widget as unprocessed.
- If there are no widgets in the relevant box when the Up/Down buttons are clicked, it should have no effect. No error should be thrown.
- When widgets are processed, they should stack at the start of the .outbox.
- When widgets are reverted, they should stack at the end of the .inbox.
- This start/end stack logic should apply both when clicking individual widgets, and when using the "Up"/"Down" buttons.
