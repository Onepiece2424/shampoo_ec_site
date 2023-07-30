class Number
  def initialize(num1, num2)
    @num1 = num1
    @num2 = num2
  end

  def addition
    puts @num1 + @num2
  end
end

Number.new(1, 2).addition
