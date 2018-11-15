# Render template file
template = File.read(template_list.sample)
render_object = ERB.new(template)

# Write template
puts "Rendering template to index.html"

# Make new directory off of template directory
begin
  Dir.mkdir(title)
rescue Exception => e
  puts "Site of that name already exists, exiting"
  exit(1)
end
