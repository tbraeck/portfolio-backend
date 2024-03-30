puts "🥷👩‍🦰 Seeding apps!"

app_data = [
  {
    name: "Barter Barn",
    description: "Barter Barn is a forum-style app that encourages community bartering of services and goods.",
    link: "https://github.com/tbraeck/barter_barn_v2",
    demo: "https://youtu.be/H4KahrCLvLM",
    image: 'barterBarn.png',
    technology: {
      frontend: "REACT",
      backend: "RUBY ON RAILS",
      database: "SQLite"
    }
  },
  {
    name: "Teach Source",
    description: "Teach Source was created to be a resource database for all educators to access for their instructional needs.",
    link: "https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main",
    demo: "https://youtu.be/KeARm1YrWls",
    image: 'drawingIdeas.png'
  },
  {
    name: "ART RANDOMIZER",
    description: "Drawing Ideas Now was created to inspire every artist or budding artist for drawing or creative ideas.",
    link: "https://github.com/tbraeck/PHASE4_PROJECT",
    demo: "https://youtu.be/b4JDXWqOegs",
    image: 'teachSource.png'
  }
]

app_data.each do |app_info|
  app = App.find_or_create_by!(name: app_info[:name], description: app_info[:description])

  image_file_path = Rails.root.join("db/images/#{app_info[:image]}")
  image = File.open(image_file_path)
  
  app.main_image.attach(io: image, filename: app_info[:image])
end
