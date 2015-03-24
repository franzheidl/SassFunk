require './lib/SassFunk'

Gem::Specification.new do |s|
  s.version = SassFunk::VERSION
  s.date = SassFunk::DATE

  # Gem Details
  s.name = "SassFunk"
  s.description = %q{Sass utility functions}
  s.summary = %q{A collection of Sass utitlity functions mainly dealing with colors, lists, and maps}
  s.authors = ["Franz Heidl"]
  s.homepage = "https://github.com/franzheidl/SassFunk"

  # LICENSE file
  s.licenses = ['MIT']

  # README file
  s.files = ["README.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass", ["~> 3.3"])

end