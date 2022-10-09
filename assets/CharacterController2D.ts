import { _decorator, Component, Node, RigidBody2D, v3, EventTarget, v2, Vec2, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CharacterController2D")
export class CharacterController2D extends Component {
  @property({ tooltip: " Amount of force added when the player jumps" })
  m_JumpForce = 400;
  @property({
    tooltip: " Amount of maxSpeed applied to crouching movement 1 = 100%",
    min: 0,
    max: 1,
  })
  m_CrouchSpeed = 0.36;
  @property({
    tooltip: " How much to smooth out the movement",
    min: 0,
    max: 0.3,
  })
  m_MovementSmoothing = 0.05;
  @property({ tooltip: " Whether or not a player can steer while jumping;" })
  m_AirControl = false;
  @property({
    tooltip: " A mask determining what is ground to the character",
    type: Node,
  })
  m_WhatIsGround;
  @property({
    tooltip: " A position marking where to check if the player is grounded",
    type: Node,
  })
  m_GroundCheck;
  @property({
    tooltip: " A position marking where to check for ceilings",
    type: Node,
  })
  m_CeilingCheck;
  @property({
    tooltip: " A collider that will be disabled when crouching",
    type: Node,
  })
  m_CrouchDisableCollider;

  k_GroundedRadius = 0.2; // Radius of the overlap circle to determine if grounded
  private m_Grounded: boolean; // Whether or not the player is grounded.
  k_CeilingRadius = 0.2; // Radius of the overlap circle to determine if the player can stand up
  private m_Rigidbody2D: RigidBody2D;
  private m_FacingRight = true; // For determining which way the player is currently facing.
  private m_Velocity = v2(0, 0);

  //
  public OnLandEvent: EventTarget;
  private OnCrouchEvent: EventTarget;
  private m_wasCrouching = false;

  onLoad() {
    this.m_Rigidbody2D = this.getComponent(RigidBody2D);

    if (this.OnLandEvent == null) {
      this.OnLandEvent = new EventTarget();
    }

    if (this.OnCrouchEvent == null) {
      this.OnCrouchEvent = new EventTarget();
    }
  }

  lateUpdate() {
    const wasGrounded = this.m_Grounded;
    this.m_Grounded = false;

    // The player is grounded if a circlecast to the groundcheck position hits anything designated as ground
    // This can be done using layers instead but Sample Assets will not overwrite your project settings.
    //   const colliders = Physics2D.OverlapCircleAll(m_GroundCheck.position, k_GroundedRadius, m_WhatIsGround);
    //   for (int i = 0; i < colliders.Length; i++)
    //   {
    //       if (colliders[i].gameObject != gameObject)
    //       {
    //           this.m_Grounded = true;
    //           if (!wasGrounded)
    //                 this.OnLandEvent.emit('OnLand');
    //       }
    //   }
  }

  public move(move: number, crouch: boolean, jump: boolean)
  {
      // If crouching, check to see if the character can stand up
      if (!crouch)
      {
          // If the character has a ceiling preventing them from standing up, keep them crouching
        //   if (Physics2D.OverlapCircle(this.m_CeilingCheck.position, this.k_CeilingRadius, this.m_WhatIsGround))
        //   {
        //       crouch = true;
        //   }
      }

      //only control the player if grounded or airControl is turned on
      if (this.m_Grounded || this.m_AirControl)
      {

          // If crouching
          if (crouch)
          {
              if (!this.m_wasCrouching)
              {
                  this.m_wasCrouching = true;
                  this.OnCrouchEvent.emit('crouch', true);
                }

              // Reduce the speed by the crouchSpeed multiplier
              move *= this.m_CrouchSpeed;

              // Disable one of the colliders when crouching
              if (this.m_CrouchDisableCollider != null)
                  this.m_CrouchDisableCollider.enabled = false;
          } else
          {
              // Enable the collider when not crouching
              if (this.m_CrouchDisableCollider != null)
                  this.m_CrouchDisableCollider.enabled = true;

              if (this.m_wasCrouching)
              {
                  this.m_wasCrouching = false;
                  this.OnCrouchEvent.emit('crouch', false);
              }
          }

          // Move the character by finding the target velocity
          const targetVelocity = new Vec2(move * 10, this.m_Rigidbody2D.linearVelocity.y);
          // And then smoothing it out and applying it to the character
          const linearVelocity = v2(0, 0);
          Vec2.lerp(linearVelocity, targetVelocity, this.m_Velocity, this.m_MovementSmoothing);
          this.m_Rigidbody2D.linearVelocity = linearVelocity;

          // If the input is moving the player right and the player is facing left...
          if (move > 0 && !this.m_FacingRight)
          {
              // ... flip the player.
              this.flip();
          }
          // Otherwise if the input is moving the player left and the player is facing right...
          else if (move < 0 && this.m_FacingRight)
          {
              // ... flip the player.
              this.flip();
          }
      }
      // If the player should jump...
      if (this.m_Grounded && jump)
      {
          // Add a vertical force to the player.
          this.m_Grounded = false;
          this.m_Rigidbody2D.applyForceToCenter(new Vec2(0, this.m_JumpForce), true);
      }
  }


  private flip() {
    // Switch the way the player is labelled as facing.
    this.m_FacingRight = !this.m_FacingRight;

    // Multiply the player's x local scale by -1.
    const theScale = this.node.scale;
    this.node.setScale(theScale.x * -1, theScale.y, theScale.z);
  }
}
