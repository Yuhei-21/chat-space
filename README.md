## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|pass|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: true|
|group_id|integer|null: false, unique: true|
|user_id|integer|null: false, unique: true|

### Association
- belongs_to :group
- belongs_to :user
