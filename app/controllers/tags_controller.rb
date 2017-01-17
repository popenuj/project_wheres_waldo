class TagsController < ApplicationController

  def index
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      redirect_to @tag, format: :json
    else
      render :index
    end
  end

  def destroy
  end

  private

    def tag_params
      params.require(:tag).permit(:x, :y, :character)
    end

end
