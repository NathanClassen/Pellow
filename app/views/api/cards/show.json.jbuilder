json.merge! @card.attributes
json.actions @card.card_actions do |action|
    json.merge! action.attributes
end
json.comments @card.comments do |comment|
    json.merge! comment.attributes
end
json.comments_count @card.comments.count

# {
#   "id": 9,
#   "title": "My new card",
#   "description": "",
#   "labels": [],
#   "list_id": 13,
#   "position": 65535.0,
#   "archived": false,
#   "created_at": "2017-10-08T17:54:55.285Z",
#   "updated_at": "2017-10-08T17:54:55.285Z",
#   "due_date": null,
#   "completed": false,
#   "board_id": 1,
#   "comments_count": 0,
#   "comments": [],
#   "actions": [
#     {
#       "id": 49,
#       "description": " added this card to My list",
#       "created_at": "2017-10-08T17:54:55.319Z",
#       "updated_at": "2017-10-08T17:54:55.319Z",
#       "card_id": 9
#     }
#   ]
# }