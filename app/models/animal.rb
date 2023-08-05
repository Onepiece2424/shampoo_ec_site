class Animal < ApplicationRecord
  self.inheritance_column = :type
end
