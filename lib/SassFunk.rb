extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
stylesheets_path = File.join(extension_path, 'stylesheets')

if (defined? Compass)
  Compass::Frameworks.register('SassFunk', :path => extension_path)
else
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + stylesheets_path
  else
    ENV["SASS_PATH"] = stylesheets_path
  end
end

module SassFunk
  VERSION = "0.0.2"
  DATE = "2015-03-24"
end
