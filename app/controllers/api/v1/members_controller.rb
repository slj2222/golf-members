class Api::V1::MembersController < ApplicationController

    def index
        member = Member.all
        render json: member
    end

end
