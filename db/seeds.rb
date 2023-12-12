# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Seeding apps!"
App.create!([
    {
     name: "Barter Barn",
    description: "This app was created for communities to be able to easily access a bartering system for goods and services.
    ",
    link: "https://github.com/tbraeck/barter_barn_v2",
    demo: "https://youtu.be/H4KahrCLvLM"
    },
    {
        name: "Teach Source",
       description: "This app was created to be a resource database for all educators to access for their instructional needs.
       ",
       link: "https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main",
       demo: "https://youtu.be/KeARm1YrWls"
       },
       {
        name: "Barter Barn",
       description: "flibbity",
       link: "doggie",
       demo: "diggity"
       },
])