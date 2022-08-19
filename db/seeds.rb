# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


member1 = Member.create(first_name: "Spencer", last_name: "Johnson", phone_number: 4172095022, membership_number: 3913, email_address: "sljohnson2225@gmail.com")

day1 = Day.create(date:"08-19-2022")
day2 = Day.create(date:"08-20-2022")
day3 = Day.create(date:"08-21-2022")
day4 = Day.create(date:"08-22-2022")
day5 = Day.create(date:"08-23-2022")
day6 = Day.create(date:"08-24-2022")
day7 = Day.create(date:"08-25-2022")

revervationTime1 = ReservationTime.create(res_time:"7:00 am", day_id:day1.id)
revervationTime1 = ReservationTime.create(res_time:"8:00 am", day_id:day1.id)
revervationTime1 = ReservationTime.create(res_time:"9:00 am", day_id:day2.id)
revervationTime1 = ReservationTime.create(res_time:"10:00 am", day_id:day2.id)
# revervationTime1 = ReservationTime.create("11:00 am")
