class AppSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers 
  
    attributes :id, :name, :description, :link, :demo, :image
   
    def image
      if object.main_image.attached?
        Rails.application.routes.url_helpers.rails_blob_path(object.main_image, only_path: true)
      else
        nil
      end
    end
  end