class Profile
  attr_accessor :name, :email

  def initialize(name, email)
    @name, @email = name, email
  end

  # ユーザーの名前とアドレスを返す
  def name_and_email
    return "私の名前は、#{name}です。アドレスは、#{email}です。"
  end

  # 名前に特定の文字列を含むかどうかの判定
  def specific_string_check
    name.include?("ブチャ")
  end
end
