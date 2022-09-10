class Api::V1::MembersController < ApplicationController
    skip_before_action :authorized, only: :create
    # wrap_parameters format: []

    # def index
    #     member = Member.all
    #     render json: member
    # end

    def index
        current_user = Member.find_by(session[:user_id])
    end

    def all_public_members
        # works, but includes current member
        publicMembers = Member.where("username like ? ", query_params[:q])
        # doesnt work.
        # publicMembers = Member.where("username like ? ", query_params[:q]).where("username" != Member.find_by(session[:user_id])
        render json: publicMembers    
    end

    def my_reservations
        user = Member.find_by(id: session[:user_id])
        render json: user.my_reservations
    end

    def create
        user = Member.create!(member_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # render json: @current_member
        user = Member.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { errors: "Not authorized" }, status: :unauthorized
        end
    end

 

    private
    def member_params
        # params.require(:member).permit(:username, :password, :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address)
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address, :is_admin )
        # :password_confirmation, :first_name, :last_name, :membership_number, :phone_number, :email_address
    end

    def query_params
        # puts params[:q].to_s
        params.permit(:q)
    end
end
