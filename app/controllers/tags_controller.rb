class TagsController < ApplicationController

  def index
    @tag = Tag.new
    @tags = Tag.all
    respond_to do |format|
      format.json {render json: @tags}
      format.html
    end
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.save
    respond_to do |format|
      format.json {render json: @tag}
    end
  end

  def destroy
  end

  private

    def tag_params
      params.require(:tag).permit(:x, :y, :character)
    end

end
