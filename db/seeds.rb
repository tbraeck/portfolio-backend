# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "🥷👩‍🦰 Seeding apps!"
App.create!([
    {
     name: "Barter Barn",
    description: "Barter Barn is a forum-style app that encourages community bartering of services and goods.",
    link: "https://github.com/tbraeck/barter_barn_v2",
    demo: "https://youtu.be/H4KahrCLvLM"
    },
    {
        name: "Teach Source",
       description: "Teach Source was created to be a resource database for all educators to access for their instructional needs.
       ",
       link: "https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main",
       demo: "https://youtu.be/KeARm1YrWls"
       },
       {
        name: "ART RANDOMIZER",
       description: "Drawing Ideas Now was created to inspire every artist or budding artist for drawing or creative ideas.",
       link: "https://github.com/tbraeck/PHASE4_PROJECT",
       demo: "https://youtu.be/b4JDXWqOegs"
       },
])

App.all.each do |app|
    image_file_path = Rails.root.join('db/images/logo192.png')
    image = File.open(image_file_path)
    app.main_image.attach(io: image, filename: 'logo192.png')
  end

  