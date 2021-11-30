# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_30_025100) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "invoice2s", force: :cascade do |t|
    t.string "timein"
    t.string "timeout"
    t.integer "totalhours"
    t.string "memo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.datetime "timein"
    t.datetime "timeout"
    t.string "memo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "the_invoices", force: :cascade do |t|
    t.string "timein"
    t.string "timeout"
    t.string "totalhours"
    t.string "memo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "websites", force: :cascade do |t|
    t.string "title"
    t.string "header"
    t.string "header1"
    t.string "header2"
    t.string "header3"
    t.string "header4"
    t.string "header5"
    t.string "header6"
    t.string "links"
    t.string "icon"
    t.string "meta_description"
    t.string "view_port"
    t.string "twitter_content"
    t.string "index_type"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
