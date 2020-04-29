- create lists migration
  id
  title
  board_id
  created_at
  update_at

lists belongs to a board
lists has cards
new migration to enforce title (redo col or rollback)

boards has lists

- create cards migration (can have many comments)
  id
  title
  due_date
  labels (arr)
  list_id
  description
  archived (bool)
  created_at
  updated_at
  completed (bool)
  board_id

card belongs to a list
