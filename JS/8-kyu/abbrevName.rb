def abbrev_name(name)
  name.split.map(&:chr).join('.').upcase
end

puts abbrev_name('Sarah Connor')
